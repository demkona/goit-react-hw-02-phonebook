import css from "../From/Form.module.css"
export const Form = ({ title, children }) => {
    return (
        <div className={css.container}>
            <h2>{title}</h2>
            <form className={css.form}>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </form>
            {children}
        </div>
    )
}