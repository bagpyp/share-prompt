
// static metadata
export const metadata = {
  title: 'Home'
}

// dynamic metadata
export async function generateMetadata({ params, searchParams }) {
  const getProduct = async () => { title: 'productTitle' }
  const product = await getProduct()

  return {
    title: product.title
  }
}

export default function Page() {
  return (
    <h1>
    My normal Next.js Page with Static Metadata
    </h1>
  )
}
