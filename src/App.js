import * as React from 'react';
import WithoutSRP from "./components/SingleResponsibilityPrinciple/WithoutSRP";
import TodosPageWithSRP from './components/SingleResponsibilityPrinciple/WithSRP/TodosPageWithSRP';
import UserTypeWithoutOCP from './components/OpenClosedPrinciple/UserTypeWithoutOCP';
import UserTypeWithOCP from './components/OpenClosedPrinciple/WithOCP/UserTypeWithOCP';

export default function MyApp() {

  const user = {
    name: "Shankar",
    email: "sg@gmail.com",
    type: "SUPER_ADMIN",

  }

  return (
    <div>
      <WithoutSRP />
      <TodosPageWithSRP />
      <UserTypeWithoutOCP user={user}/>
      <UserTypeWithOCP/>
    </div>
  );
}