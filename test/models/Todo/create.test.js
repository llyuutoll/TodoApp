const assert = require('power-assert')
const Todo = require('../../../models/Todo')

describe('Todo.createメソッドのテスト', () => {
    it('メソッド実行時、引数にtitleプロパティを含むオブジェクトが無いとエラーになる', () => {
        const dataList = [
            {}, // 空のデータ
            { body: '詳細文' } // titleプロパティがない
        ]
        dataList.forEach(data => {
            try {
                Todo.create(data)
                assert.fail()
            } catch (error) {
                assert.equal(error.message, 'titleは必須です')
            }
        })
    })

    it('メソッド実行時、引数にbodyプロパティを含むオブジェクトが無いとエラーになる', () => {
        try {
            Todo.create({ title: 'タイトル' })
            assert.fail()
        } catch (error) {
            assert.equal(error.message, 'bodyは必須です')
        }
    })

    it('メソッド実行時、正しい引数を渡すと新規にTodoデータを作成して、作成したTodoを返す', () => {
        const oldTodos = Todo.findAll()
        const data = {
            title: 'dummy title',
            body: 'dummy body'
        }

        const createdTodo = Todo.create(data)
        assert.deepEqual(createdTodo, {
            id: createdTodo.id,
            title: createdTodo.title,
            body: createdTodo.body,
            createdAt: createdTodo.createdAt,
            updatedAt: createdTodo.updatedAt
        })

        const currentTodos = Todo.findAll()
        assert.equal(oldTodos.length + 1, currentTodos.length)
    })
})