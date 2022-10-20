import React from 'react'

function TableDish() {
    return (
        <div className='table'>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>người đặt bàn</th>
                        <th>Tên ngón ăn</th>
                        <th>Bình luận</th>
                        <th>Đánh giá</th>
                        <th>Đánh giá chung</th>
                        <th>Ngày đánh giá</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>Tôm sốt chanh dây</td>
                        <td>Món ăn khá ngon</td>
                        <td>5</td>
                        <td>4.2</td>
                        <td>20/4/2022</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lưu Danh</td>
                        <td>Phở bát đá</td>
                        <td>Món ăn ngon , phục vụ chu đáo</td>
                        <td>5</td>
                        <td>4.7</td>
                        <td>20/4/2022</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>July</td>
                        <td>Bún thang</td>
                        <td>Món ăn nhạt</td>
                        <td>3</td>
                        <td>3.9</td>
                        <td>17/10/2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableDish
