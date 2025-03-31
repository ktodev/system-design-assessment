import { MovieActionsProps } from "../../state/interfaces";

export const MovieActionsDemoExample = ({ id }: MovieActionsProps) => {
  return (
    <div className="actions-example">
      <a href="#">
        This is not even a button! It's a link. 
        It could be anything, like a clickable icon with its action id={id}
        </a>
    </div>
  );
};
