import ProductSection from "@/components/global/Products/ProductSection"
import Title from "@/components/global/title"

export const Products = () => {
  return(
    <section className="w-full pb-14 ld:pb-[200px]" id="products">
      <Title>наші послуги</Title>
      <ProductSection/>
    </section>
  )
}