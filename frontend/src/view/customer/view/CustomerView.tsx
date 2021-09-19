import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CustomerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.customer.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.birthdate')}
          value={record.birthdate}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.gender')}
          value={
            record.gender &&
            i18n(
              `entities.customer.enumerators.gender.${record.gender}`,
            )
          }
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

export default CustomerView;
