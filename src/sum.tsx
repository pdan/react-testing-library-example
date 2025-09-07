
const Sum = ({ num1, num2 }: { num1: number, num2: number }) => {
    return <div style={{ padding: "30px 40px", borderRadius: "30px", height: "" }}>
        <div>{num1} + {num2} = <span data-testid="result">{num1 + num2}</span></div>
    </div>
}

export default Sum