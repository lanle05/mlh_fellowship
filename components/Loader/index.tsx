
export default function LoadingSpinner(props:any) {
  return (
    <div className={props.small ? "lds-ring":'lds-big-ring'}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}