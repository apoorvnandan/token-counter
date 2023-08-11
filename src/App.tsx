import { useState } from "react";
import { getEncoding } from "js-tiktoken";

export default function Home() {
  const [inp, setInp] = useState('')
  const [count, setCount] = useState(0)
  const getNumTokens = (txt: string, model: any) => {
    const enc = getEncoding(model)
    const tokens = enc.encode(txt)
    return tokens.length
  }

  return (
    <main
      style={{ background: "var(--gray-1)", color: "var(--gray-12)" }}
      className="flex min-h-screen flex-col items-center md:p-24 p-4">
      <h1>Paste your prompt and count the tokens for ChatGPT and GPT4</h1>
      <div className="h-8"></div>
      <div className="flex gap-8 items-center">
        <button
          className="px-4 py-2 rounded-md border border-neutral-400 hover:border-neutral-300"
          onClick={() => {
            setCount(getNumTokens(inp, 'cl100k_base'))
          }}
        >Count</button>
        <p>Token Count: {count}</p>
      </div>
      <div className="h-8"></div>
      <textarea
        placeholder="Paste your prompt here..."
        className="h-96 w-full max-w-3xl p-8 rounded-md border border-neutral-400"
        style={{ background: "var(--gray-3)" }}
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
    </main>
  )
}
