import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function ProductView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.product.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.product.fields.description')}
          value={record.description}
        />

        {record.unitPrice != null && <TextViewItem
          label={i18n('entities.product.fields.unitPrice')}
          value={Number(record.unitPrice).toFixed(2)}
        />}

        <ImagesViewItem
          label={i18n('entities.product.fields.photos')}
          value={record.photos}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default ProductView;
