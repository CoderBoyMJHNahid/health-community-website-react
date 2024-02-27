import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';

//  import tables data 
import TableData from '../data/TableData';



const Search = () => {
    const Wrapper = styled.section` 
        padding: 50px 0px;
        .search_input_wrapper{
            margin-bottom: 10px;
        }
        .data_tables{
            color: black;
            font-size: 18px;
        }
        div#tables_wrapper nav {
            background: #e3e3e3;
            color: black;
        }

        .rdt_TableHeadRow {
            background: #dfdfdf;
            color: black;
        }
    `;

    const [data, setData] = useState(TableData);
    const [inputData, SetInputData] = useState("")

    const [filter, setFilterData] = useState([]);

    const columns = [
        {
            name: "Data Topic Category",
            selector: (row)=> row.category,
            sortable: true,
            style:{
                padding:"10px",
            }
        },
        {
            name: "Tables (Excel)",
            selector: (row)=> row.tables,
            sortable: true,
            style:{
                padding:"10px",
            }
        },
        {
            name: "Charts (Bar Charts)",
            selector: (row)=> row.charts,
            sortable: true,
            style:{
                padding:"10px",
            }
        },
        {
            name: "Maps (PDF)",
            selector: (row)=> row.maps,
            sortable: true,
            style:{
                padding:"10px",
            }
        }
    ];

    useEffect(() => {
        setFilterData(TableData);
    }, []);

    useEffect(()=>{
        const result = data.filter(val=>{
            return val.category.toLowerCase().match(inputData.toLowerCase())
        });

        setFilterData(result);
    },[inputData])

  return (
    <Wrapper>
        <div className="container">
            <div className="row">
                {/* Top Heading of this pages */}
                <div className="pages_top_heading">
                    <h1>Search And Table</h1>
                </div>
                {/* Sub heading after Top Heading */}
                <div className="pages_subtitle">
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>

                {/* data table showing */}
                <div id="tables_wrapper">
                    {/* <div className="search_input_wrapper">
                        
                    </div> */}
                    <DataTable 
                    className='data_tables'
                    columns={columns}
                    data={filter}
                    pagination
                    paginationPerPage={30}
                    paginationRowsPerPageOptions={[30, 50, 100]}
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input
                         type='search'
                         className='form-control w-50'
                         placeholder='Search Data Topic Category'
                         value={inputData}
                         onChange={(e)=> SetInputData(e.target.value)}
                         />
                    }
                    />
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Search;
