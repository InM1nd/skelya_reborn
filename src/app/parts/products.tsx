import ProductSection from "@/components/global/Products/ProductSection"
import Title from "@/components/global/title"

export const Products = () => {
  return(
    <section className="w-full pb-20 lg:pb-40" id="products">
      <Title>наші послуги</Title>
      <ProductSection/>
    </section>
  )
}