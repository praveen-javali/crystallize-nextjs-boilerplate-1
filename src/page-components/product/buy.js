import React, { useContext } from 'react';
import { LayoutContext } from '@crystallize/react-layout';

import { Button } from 'ui';
import { useBasket } from 'components/basket';
import { useT } from 'lib/i18n';
import { useLocale } from 'lib/app-config';

import {
  ProductFooter,
  Price,
  DiscountDetails,
  BeforePrice,
  Percentage
} from './styles';

export default function BuyButton({ product, selectedVariant, pricing }) {
  const basket = useBasket();
  const layout = useContext(LayoutContext);
  const t = useT();
  const locale = useLocale();

  async function buy() {
    await layout.actions.showRight();

    basket.actions.addItem({
      sku: selectedVariant.sku,
      path: product.path,
      priceVariantIdentifier: pricing?.discountPrice
        ? pricing?.discountPrice?.identifier
        : pricing?.defaultPrice.identifier || locale.crystallizePriceVariant
    });
  }
  return (
    <ProductFooter>
      {pricing?.discountPrice ? (
        <Price discounted>
          <strong>
            {t('common.price', {
              value: pricing?.discountPrice?.price,
              currency: pricing?.discountPrice?.currency
            })}
          </strong>
          <DiscountDetails>
            <BeforePrice>
              {t('common.price', {
                value: pricing?.defaultPrice?.price,
                currency: pricing?.defaultPrice?.currency
              })}
            </BeforePrice>
            <Percentage>{`-${pricing?.discountPercentage}%`}</Percentage>
          </DiscountDetails>
        </Price>
      ) : (
        <Price>
          <strong>
            {t('common.price', {
              value: pricing?.defaultPrice?.price,
              currency: pricing?.defaultPrice?.currency
            })}
          </strong>
        </Price>
      )}
      <Button
        width="250px"
        onClick={buy}
        disabled={!pricing?.defaultPrice.currency}
      >
        {t('product.addToBasket')}
      </Button>
    </ProductFooter>
  );
}
