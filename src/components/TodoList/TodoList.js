import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Input, FormGroup, Button, ListGroup, ListGroupItem } from 'reactstrap'
import { addList, doneList, removeList } from '../../redux/actions'
import './TodoList.scss'
function TodoList() {

  const todoState = useSelector(state => state.todoState)
  const dispatch = useDispatch()
  const { todoList } = todoState
  const [input, setInput] = useState('')
  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addList(input))
    setInput('')
  }

  const handleFinishTodo = content => {
    dispatch(doneList(content))
  }

  const handleRemoveTodo = content => {
    dispatch(removeList(content))
  }

  return (
    <>
      <div className='todo__list'>
        <h4>Todo List</h4>
        <Form onSubmit={handleAddTodo}>
          <FormGroup>
            <Row>
              <Col md={8}>
                <Input
                  bsSize='md'
                  id='todoInput'
                  name='input'
                  placeholder='Add your todo...'
                  type='text'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  required
                />
              </Col>
              <Col md={4}>
                <Button size='sm' color='primary' type='submitted' >ADD</Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>

        <ListGroup>
          <div className="todo__item-wrap">
            {todoList.map(item => (
              <div className='todo__item' key={item.content}>
                <Row>
                  <Col md={12}>
                    <ListGroupItem className='todo__item'>
                      {item.content}
                    </ListGroupItem>
                  </Col>
                </Row>
                <div className='todo__space'></div>
                <Row>
                  <Col md={6}>
                    {
                      item.finish === true ? (
                        <Button color='success' size='lg' className='todo__actions-finish' onClick={() => handleFinishTodo(item.content)}>
                          <i className='fas fa-check'></i>
                        </Button>
                      ) : (
                        <Button color='danger' size='lg' className='todo__actions-finish' onClick={() => handleFinishTodo(item.content)}>
                          <i className='fas fa-eraser'></i>
                        </Button>
                      )
                    }
                  </Col>

                  <Col md={6}>
                    <Button size='lg' className='todo__actions-delete' onClick={() => handleRemoveTodo(item.content)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </ListGroup>
      </div>
    </>
  )
}

export default TodoList