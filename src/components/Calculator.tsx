import { useEffect, useState } from "react";
import { useFormik } from "formik";

import TextField from "./TextField";
import Outcome from "./Outcome";
import Currency from "./Currency";
import { initialFormState } from "../types";
import { formValidationSchema } from "../validations";

function Calculator() {
  const [form, setForm] = useState(initialFormState);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    touched,
    errors,
    values: { costOfItem, markup },
  } = useFormik({
    initialValues: {
      costOfItem: "",
      markup: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: ({ costOfItem, markup }) => {
      const calculatedProfit = (Number(costOfItem) * Number(markup)) / 100;
      const calculatedSalePrice = Number(costOfItem) + Number(calculatedProfit);
      const calculatedGrossMargin =
        (calculatedProfit / calculatedSalePrice) * 100;

      setForm({
        ...form,
        salePrice: calculatedSalePrice,
        profit: calculatedProfit,
        grossMargin: calculatedGrossMargin,
      });
    },
  });

  const { salePrice, profit, grossMargin, currency } = form;

  const onReset = () => {
    setForm({
      ...initialFormState,
      currency: localStorage?.currency,
    });
    resetForm();
  };

  const changeCurrency = (id: string) => {
    localStorage.currency = id;

    setForm({
      ...form,
      currency: id,
    });
  };

  const onCurrency = (id: string) => () => {
    changeCurrency(id);
  };

  useEffect(() => {
    if ("currency" in localStorage) {
      changeCurrency(localStorage.currency);
    }
  }, []);

  return (
    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-700 sm:mt-13 mt-16 lg:mx-0 lg:flex lg:max-w-none">
      <div className="px-4 py-6 md:p-8 sm:p-10 lg:flex-auto items-center flex">
        <form
          method="POST"
          autoComplete="off"
          className="space-y-8 w-full"
          onSubmit={handleSubmit}
        >
          <Currency activeCurrency={currency} onCurrency={onCurrency} />
          <TextField
            name="costOfItem"
            label="Cost of Item"
            currency={currency}
            value={costOfItem}
            error={touched.costOfItem && errors.costOfItem}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            name="markup"
            label="Markup"
            value={markup}
            error={touched.markup && errors.markup}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-8">
            <button type="submit" className="flex-2 btn btn-primary">
              Calculate
            </button>
            <button
              type="button"
              onClick={onReset}
              className="flex-1 btn btn-secondary"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-lg lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 dark:bg-black text-center ring-1 ring-inset ring-gray-900/5 dark:ring-gray-700 lg:flex lg:flex-col lg:justify-center py-8">
          <div className="space-y-8">
            <Outcome
              withDivider
              label="Sale Price"
              value={salePrice}
              currency={currency}
            />
            <Outcome
              withDivider
              label="Profit"
              value={profit}
              currency={currency}
            />
            <Outcome label="Gross Margin" value={grossMargin} currency="%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
