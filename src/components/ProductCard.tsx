import {
  SfButton,
  SfRating,
  SfCounter,
  SfLink,
  SfIconShoppingCart,
  SfIconFavorite,
} from "@storefront-ui/react";

export default function ProductCardVertical() {
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
      <div className="relative">
        <SfLink href="#">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg"
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square"
            width={300}
            height={300}
          />
        </SfLink>
        <SfButton
          type="button"
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <SfLink href="#" variant="secondary" className="no-underline">
          Athletic mens walking sneakers
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={5} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{123}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          Lightweight • Non slip • Flexible outsole • Easy to wear on and off
        </p>
        <span className="block pb-2 font-bold typography-text-lg">
          K2345,99
        </span>
        <SfButton
          type="button"
          size="sm"
          slotPrefix={<SfIconShoppingCart size="sm" />}
        >
          Add to cart
        </SfButton>
      </div>
    </div>
  );
}
