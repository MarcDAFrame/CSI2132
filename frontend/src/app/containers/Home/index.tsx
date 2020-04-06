import * as React from 'react';
import * as style from './style.scss';

interface Props{
}
interface State {
}


const tables = [
  {href: "/tables/user", label: "Users Table"},
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
        </a>
      ))}
      </div>
    );
  }
}
