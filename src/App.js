import * as React from 'react';
import WithoutSRP from "./components/SingleResponsibilityPrinciple/WithoutSRP";
import TodosPageWithSRP from './components/SingleResponsibilityPrinciple/WithSRP/TodosPageWithSRP';

export default function MyApp() {
  return (
    <div>
      <WithoutSRP />
      <TodosPageWithSRP />
    </div>
  );
}