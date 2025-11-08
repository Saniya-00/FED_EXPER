function App2(){
    return ( 
     <div>
        <Student name="sahithi"/>
        <Student name="hello"/>
     </div>
    );
}
function Student(props){
    return <h2>Hello, (props.name)!</h2>
}
export default App2;