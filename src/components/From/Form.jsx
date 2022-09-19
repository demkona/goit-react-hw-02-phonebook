import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import css from "../From/Form.module.css"

export class Form extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };


    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            id: nanoid(),
            [name]: value
        });
    };

    findByName = contactName => {
        return this.props.contacts.some(({ name }) => name === contactName);
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name } = this.state;

        if (this.findByName(name) || name !== name.toLowerCase()) {
            alert(`${name} is already in contacts!`);
            return;

        }


        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                <button type='submit'>Add contact</button>
            </form>
        )
    }

}