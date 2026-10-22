import { Embedder } from '../src/lib/embedder.js';

// Download the model once before workers start: parallel cold downloads race on the
// same cache file and a worker loads a partial model ("Protobuf parsing failed").
export default async function setup(): Promise<void> {
  const embedder = new Embedder();
  await embedder.init();
  await embedder.dispose();
}
