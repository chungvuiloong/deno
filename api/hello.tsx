export default () => {
	return new Response(`Hello, from Deno v${(globalThis as any).Deno.version.deno}!`);
};