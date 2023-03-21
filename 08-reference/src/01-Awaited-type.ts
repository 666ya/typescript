const awaitA:Promise<boolean> = Promise.resolve(true)

type AawaitA = Awaited<typeof awaitA>
type AawaitB = Awaited<Promise<number>>