import ProductSection from "@/components/global/Products/ProductSection"
import Title from "@/components/global/title"

export const Products = () => {
  return(
    <section className="w-full pb-7 sm:pb-20" id="products">
      <Title>послуги</Title>
      <ProductSection/>
    </section>
  )
}