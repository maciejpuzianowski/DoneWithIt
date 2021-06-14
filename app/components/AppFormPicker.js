import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  placeholder,
  numberOfColumns,
  style,
  PickerItemComponent,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        style={style}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
