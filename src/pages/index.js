import BookHome from "@/components/Books/BookHome"
import Banner from "@/components/Home/Banner"
import Layout from "@/components/Layout/Layout"

export default function Home() {
  return (
      <Layout title={"Home"}>
           <Banner />
           <BookHome />
     </Layout>
  )
}

