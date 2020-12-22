import ItemCollection from 'components/item-collection';
import Banner from 'components/banner';

const StackRenderer = ({ stack }) => {
  switch (stack?.shape?.name) {
    case 'Item collection': {
      const itemCollectionContent = {
        title: stack?.components?.find((c) => c.name === 'Title')?.content
          ?.text,
        description: stack?.components?.find((c) => c.name === 'Description')
          ?.content?.json,
        items: stack?.components?.find((c) => c.name === 'Items')?.content
          ?.items
      };

      return <ItemCollection {...itemCollectionContent} />;
    }
    case 'Banner': {
      const bannerContent = {
        title: stack?.components?.find((c) => c.name === 'Title')?.content
          ?.text,
        description: stack?.components?.find((c) => c.name === 'Description')
          ?.content?.json,
        linkText: stack?.components?.find((c) => c.name === 'Link text')
          ?.content?.text,
        link: stack?.components?.find((c) => c.name === 'Link')?.content?.text,
        image: stack?.components?.find((c) => c.name === 'Image')?.content
          ?.images,
        addTextAsOverlay: stack?.components?.find(
          (c) => c.name === 'Add text as overlay'
        )?.content?.value
      };
      return <Banner {...bannerContent} />;
    }
    default:
      return <div>Stack type not supported</div>;
  }
};

const Stackable = ({ stacks }) => {
  return (
    <>
      {stacks?.map((stack) => (
        <StackRenderer stack={stack} key={stack?.id} />
      ))}
    </>
  );
};

export default Stackable;
