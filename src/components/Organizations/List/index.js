import './style.css'

const List = ({ list, onView, onEdit, onDelete }) => {
  return (
    <div className='row'>
      {list.map(item => {
        return (
          <div key={item.id} className='col-3'>
            <div className='organization'>
              <main className='organization-main'>
              <h6>Name: {item.name}</h6>
              <div>Email: {item.email}</div>
              <div>CreatedAt: {item.createdAt}</div>
                
              </main>

              <footer className='organization-footer'>
                <button
                  className='btn btn-sm'
                  onClick={() => {
                    onView(item.id)
                  }}
                >
                  View
                </button>

                <button
                  className='btn btn-sm'
                  onClick={() => {
                    onEdit(item)
                  }}
                >
                  Edit
                </button>

                <button
                  className='btn btn-dark btn-sm'
                  onClick={() => {
                    onDelete(item.id)
                  }}
                >
                  Delete
                </button>
              </footer>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
