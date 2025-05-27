export const AddPokemonPage = () => {

    return (
    <>
        <h1>Add Pokemon</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formElement = form.elements as typeof form.elements & {

                name: {value: string}

            }
            console.log(formElement.name.value);
        }}>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <br/>
            <label>
                Type:
                <input type="text" name="type"/>
            </label>
            <br/>
            <label>
                Image URL:
                <input type="url" name="image"/>
            </label>
            <button type="submit">Add Pokemon</button>
        </form>
    </>
    )
};
