import { Image } from '@crystallize/react-image';
import isEqual from 'lodash/isEqual';

import {
  Outer,
  AttributeName,
  AttributeSelector,
  AttributeButton,
  VariantImage,
  Variant,
  Values,
  Button
} from './styles';

function reduceAttributes(variants) {
  return variants.reduce((acc, variant) => {
    const attrs = acc;
    variant.attributes.forEach(({ attribute, value }) => {
      const currentAttribute = attrs[attribute];
      if (!currentAttribute) {
        attrs[attribute] = [value];
        return;
      }

      const valueExists = currentAttribute.find((str) => str === value);
      if (!valueExists) {
        attrs[attribute].push(value);
      }
    });

    return attrs;
  }, {});
}

function attributesToObject({ attributes }) {
  return Object.assign(
    {},
    ...attributes.map(({ attribute, value }) => ({ [attribute]: value }))
  );
}

function VariantAttributeValue({
  attribute,
  value,
  variants,
  selectedVariant
}) {
  const selectedAttributes = attributesToObject(selectedVariant);
  selectedAttributes[attribute] = value;

  // Get the most suitable variant
  const mostSuitableVariant = variants.find((variant) => {
    if (isEqual(selectedAttributes, attributesToObject(variant))) {
      return true;
    }
    return false;
  });

  const [image] = mostSuitableVariant?.images || [];

  return (
    <div>
      {image && (
        <VariantImage>
          <Image {...image} sizes="100px" />
        </VariantImage>
      )}
      {value}
    </div>
  );
}

export default function VariantSelector({
  variants,
  selectedVariant,
  onVariantChange
}) {
  const attributes = reduceAttributes(variants);
  if (!Object.keys(attributes).length) {
    return (
      <Outer>
        {variants.map((variant) => (
          <Variant key={variant.id}>
            <Values>
              <Button
                key={variant.id}
                selected={variant.id === selectedVariant.id}
                onClick={() => onVariantChange(variant)}
              >
                {console.log(variant)}
                {variant.name}
              </Button>
            </Values>
          </Variant>
        ))}
      </Outer>
    );
  }

  function onAttributeSelect({ attribute, value }) {
    const selectedAttributes = attributesToObject(selectedVariant);
    selectedAttributes[attribute] = value;

    // Get the most suitable variant
    let variant = variants.find((variant) => {
      if (isEqual(selectedAttributes, attributesToObject(variant))) {
        return true;
      }
      return false;
    });

    /**
     * No variant matches all attributes. Let's select the first one
     * that matches just the new set
     */
    if (!variant) {
      variant = variants.find((variant) =>
        variant.attributes.some(
          (a) => a.attribute === attribute && a.value === value
        )
      );
    }

    if (variant) {
      onVariantChange(variant);
    }
  }

  return (
    <Outer>
      {Object.keys(attributes).map((attribute) => {
        const attr = attributes[attribute];
        const selectedAttr = selectedVariant.attributes.find(
          (a) => a.attribute === attribute
        );

        if (!selectedAttr) {
          return null;
        }
        return (
          <div key={attribute}>
            <AttributeName>{attribute}</AttributeName>
            <AttributeSelector>
              {attr.map((value) => (
                <AttributeButton
                  key={value}
                  onClick={() =>
                    onAttributeSelect({
                      attribute,
                      value
                    })
                  }
                  type="button"
                  selected={value === selectedAttr.value}
                >
                  <VariantAttributeValue
                    attribute={attribute}
                    value={value}
                    variants={variants}
                    selectedVariant={selectedVariant}
                  />
                </AttributeButton>
              ))}
            </AttributeSelector>
          </div>
        );
      })}
    </Outer>
  );
}
