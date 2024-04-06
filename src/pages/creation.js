import React from "react";

class Creation extends React.Component {
    // Constructor to initialize the state
    constructor(props) {
        super(props);
        this.state = {
            fields: []
        };
    }
    
    // Add a new field to the state
    addField = () => {
        this.setState(prevState => ({
            fields: [...prevState.fields, { id: prevState.fields.length, title: "", description: "", className: "New-Field"}]
        }));
    }

    render() {
        const { fields } = this.state;

        return (
            <main>
                <header className="creation-header">
                    <h1>Add a Dataset</h1>
                    <div className="creation-buttons">
                        <button className="publish">Publish</button>
                        <button className="save">Save</button>
                        <button className="delete">Delete</button>
                    </div>
                </header>

                <div className="creation-attributes">
                    <div className="creation-properties">
                        <h1>Properties</h1>
                        <div className="creation-information">
                            <label htmlFor="creation-name">Name</label>
                            <input type="text" id="creation-name" name="creation-name" />
                            <label htmlFor="creation-publisher">Publisher</label>
                            <input type="text" id="creation-publisher" name="creation-publisher" />
                            <label htmlFor="creation-description">Description</label>
                            <input type="text" id="creation-description" name="creation-description" />
                        </div>
                    </div>

                    <div className="creation-fields">
                        <h1>Fields</h1>
                        <div className="additional-information">
                            {fields.map((field, index) => (
                                <div key={field.id}>
                                    <input
                                        type="text"
                                        placeholder="Enter title"
                                        value={field.title}
                                        className={field.className}
                                        onChange={(e) => {
                                            const newFields = [...fields];
                                            newFields[index].title = e.target.value;
                                            this.setState({ fields: newFields });
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter description"
                                        value={field.description}
                                        className={field.className}
                                        onChange={(e) => {
                                            const newFields = [...fields];
                                            newFields[index].description = e.target.value;
                                            this.setState({ fields: newFields });
                                        }}
                                    />
                                    <br />
                                </div>
                            ))}
                        </div>
                        <div className="creation-add-fields">
                            <label htmlFor="creation-field">Add a Field</label>
                            <input type="button" value="Add Field" id="add-new-field" onClick={this.addField} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Creation;
