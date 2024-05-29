import Input from "./Input";

export default function GenerateForm(){
    return(
        <div className='flex-generateform'>
            <h1>Generate QR Code</h1>
            <form>
                <Input 
                    label="Store Name"
                    id="storename"
                    type="text"
                    name="storename"
                    placeholder="Input store name"
                />

                <Input 
                    label="Store Location"
                    id="storelocation"
                    type="text"
                    name="storelocation"
                    placeholder="Input store location"
                />
            </form>
            <p className="form-actions">
                <button className="input-generateform">Input Store Detail</button>
            </p>
        </div>
    );
}