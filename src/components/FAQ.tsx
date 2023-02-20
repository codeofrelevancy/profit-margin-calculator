function FAQ() {
  return (
    <div className="max-w-screen-xl p-8 mx-auto pb-52">
      <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 underline underline-offset-6 decoration-8 decoration-brand">
        FAQs
      </h2>
      <ul className="flex flex-col items-start gap-8">
        <li>
          <p className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
            What is profit margin?
          </p>
          <div className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
            Profit margin indicates the profitability of a product, service, or
            business. It’s expressed as a percentage; the higher the number, the
            more profitable the business.
          </div>
        </li>
        <li>
          <p className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
            How do you calculate gross profit margin?
          </p>
          <div className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
            It’s simple to find gross profit margin automatically using the
            calculator. To calculate manually, subtract the cost of goods sold
            (COGS) from the net sales (gross revenues minus returns, allowances,
            and discounts). Then divide this figure by net sales, to calculate
            the gross profit margin in a percentage. <br />
            <br />
            <a
              href="https://www.youtube.com/@codeofrelevancy"
              target="_blank"
              className="text-brand"
            >
              Code of Relevancy
            </a>
            's free profit margin calculator does it for you, but you can also
            use the following formula:
            <br />
            Step 1: X (Net sales) - Y (COGS) = Z<br />
            Step 2: Z / X (Net sales) = % Gross profit margin
          </div>
        </li>
        <li>
          <p className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
            How do you calculate a 20% profit margin?
          </p>
          <div className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
            Follow these easy steps to calculate a 20% profit margin:
            <ol className="list-decimal list-inside">
              <li>Use 20% in its decimal form, which is 0.2</li>
              <li>Subtract 0.2 from 1 to get 0.8</li>
              <li>Divide the original price of your good by 0.8</li>
              <li>
                The resulting number is how much you should charge for a 20%
                profit margin
              </li>
            </ol>
          </div>
        </li>
        <li>
          <p className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
            How does the profit margin calculator work?
          </p>
          <div className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
            <a
              href="https://www.youtube.com/@codeofrelevancy"
              target="_blank"
              className="text-brand"
            >
              Code of Relevancy
            </a>
            ’s free profit margin calculator is fast and easy to use. It simply
            takes the markup percentage you enter, adds that in decimal format
            to the cost, and then gives you a sale price which reflects the
            markup.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FAQ;
