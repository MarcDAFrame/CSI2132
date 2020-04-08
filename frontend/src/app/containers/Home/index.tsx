import * as React from 'react';
import * as style from './style.scss';

interface Props{
}
interface State {
}


const tables = [
  {href: "/tables/user", label: "Guest/Host Table"},
  {href: "/tables/employee", label: "Employee Table"},
  {href: "/tables/admin", label: "Admin Table"},
]

export class Home extends React.Component<Props, State> {

  constructor(props: Props, context: any) {
    super(props, context);

    this.state = {
    };
  }
  render() {
    return (
      <div
        className={style.normal}
      >
      <h1>Home</h1>
      {tables.map((table)=>(
        <a href={table.href}>
          {table.label} - ({table.href})
          <br></br>
        </a>
      ))}
      </div>
    );
  }
}
