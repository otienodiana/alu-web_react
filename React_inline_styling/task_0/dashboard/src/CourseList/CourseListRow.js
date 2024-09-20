import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';

const rowStyle = {
    backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
    backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr style={isHeader ? headerRowStyle : rowStyle}>
            { isHeader ? (
                textSecondCell === null ? (
                    <th colSpan="2">{ textFirstCell }</th>
                ) : (
                    <>
                        <th>{ textFirstCell }</th>
                        <th>{ textSecondCell }</th>
                    </>
                )
            ) : (
                <>
                    <td>{ textFirstCell }</td>
                    <td>{ textSecondCell }</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf([null])
    ]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;
