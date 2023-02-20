import { ChangeEvent, FocusEvent } from "react";

interface TextFieldProps {
  label: string;
  name: string;
  value?: any;
  currency?: string;
  error?: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

interface CurrencyProps {
  activeCurrency?: string;
  onCurrency: (id: string, symbol: string) => () => void;
}

interface OutcomeProps {
  label: string;
  value: any;
  currency: string | undefined;
  withDivider?: boolean;
}

type Errors = {
  costOfItem?: string | null;
  markup?: string | null;
};

interface FormState {
  salePrice: Number;
  profit: Number;
  grossMargin: Number;
  currency?: string;
  errors: Errors;
}

const initialFormState: FormState = {
  salePrice: 0,
  profit: 0,
  grossMargin: 0,
  currency: "USD",
  errors: {
    costOfItem: null,
    markup: null,
  },
};

export type { TextFieldProps, CurrencyProps, OutcomeProps, FormState, Errors };
export { initialFormState };
