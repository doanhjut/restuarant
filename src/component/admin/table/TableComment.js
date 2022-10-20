import React from 'react'

function TableComment() {
    return (
        <div className='table'>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Số điện thoại đặt bàn</th>
                        <th>Đánh giá</th>
                        <th>Bính luận</th>
                        <th>Đồng ý</th>
                        <th>Không đồng ý</th>
                        <th>Ngày đánh giá</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>4</td>
                        <td>Tôi đã có những trải nghiệm tuyệt vời</td>
                        <td>5</td>
                        <td>0</td>
                        <td>20/4/2022</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lưu Danh</td>
                        <td>4</td>
                        <td>Món ăn ngon , phục vụ chu đáo</td>
                        <td>2</td>
                        <td>0</td>
                        <td>20/4/2022</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>July</td>
                        <td>3</td>
                        <td>Giá khá cao</td>
                        <td>2</td>
                        <td>3</td>
                        <td>17/10/2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableComment
