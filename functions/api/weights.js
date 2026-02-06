// Cloudflare Pages Function for reading/writing weights to KV
// KV namespace bound as WEIGHTS_KV in wrangler.toml / Pages settings

const WEIGHTS_KEY = 'user_weights';

export async function onRequestGet(context) {
    const { env } = context;

    try {
        const weights = await env.WEIGHTS_KV.get(WEIGHTS_KEY);

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

        await env.WEIGHTS_KV.put(WEIGHTS_KEY, weights);

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
