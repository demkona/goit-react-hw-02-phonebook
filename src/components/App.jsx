import { Component } from 'react';
import { Section } from './Section/Section'
import { Form } from './From/Form'
import { Contacts } from './Contacts/Contacts'
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handRender = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {

      }
    })
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form title="Name">
            <button type='button' onClick={this.handRender}>Add contact</button>
          </Form>
        </Section>
        <Section title="Contacts">
          <Contacts />
        </Section>
      </>
    )
  }
}
