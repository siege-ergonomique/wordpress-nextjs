import CardProduct from "../blocks/card/card_product";

export default function GridProducts({ items }) {
    return (
        <section aria-labelledby="product-heading" className="layout grid_aside mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <h2 id="product-heading" className="sr-only">
                Produits
            </h2>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {items.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
