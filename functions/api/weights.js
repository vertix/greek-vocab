// Cloudflare Pages Function for reading/writing weights to KV
// KV namespace bound as WEIGHTS_KV in wrangler.toml / Pages settings
// Each word set stores its progress under its own key: weights_<setId>

// KV key for a given set. `?set=` defaults to "all".
function weightsKey(url) {
    const setId = new URL(url).searchParams.get('set') || 'all';
    return `weights_${setId}`;
}

export async function onRequestGet(context) {
    const { request, env } = context;

    try {
        const key = weightsKey(request.url);
        let weights = await env.WEIGHTS_KV.get(key);

        // One-time migration: the pre-multi-set app stored the "all" set under
        // "user_weights". Seed the namespaced key from it the first time.
        if (!weights && key === 'weights_all') {
            const legacy = await env.WEIGHTS_KV.get('user_weights');
            if (legacy) {
                await env.WEIGHTS_KV.put(key, legacy);
                weights = legacy;
            }
        }

        return new Response(weights || '[]', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function onRequestPut(context) {
    const { request, env } = context;

    try {
        const weights = await request.text();

        // Validate it's valid JSON
        JSON.parse(weights);

        await env.WEIGHTS_KV.put(weightsKey(request.url), weights);

        return new Response(JSON.stringify({ success: true }), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
