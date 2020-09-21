const assert = require('power-assert')
const Todo = require('../../../models/Todo')

describe('Todo.findAllメソッドのテスト', () => {
    it('Todoが決められたデータ構造で配列に格納されている', () => {
        const todos = Todo.findAll()
        assert.equal(Array.isArray(todos), true)
        assert.equal(todos.length > 0, true)
        todos.forEach(todo => {
            assert.deepStrictEqual({...todo}, {
                id: todo.id,
                title: todo.title,
                body: todo.body,
                createdAt: todo.createdAt,
                updatedAt: todo.updatedAt
            })
        })
    })
})