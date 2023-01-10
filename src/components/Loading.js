import ReactLoading from "react-loading";
  
export default function Loading() {
  return (
  <div style={{ width: '50%', margin: 'auto' }}>
    <ReactLoading type="bars" color="#0000FF" height={667} width={375}/>
  </div>
  );
}