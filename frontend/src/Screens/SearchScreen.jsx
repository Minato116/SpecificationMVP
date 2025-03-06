import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {
    Row,
    Col,
    Button,
    Form,
} from 'react-bootstrap'
import { useGetEstatesQuery, useGetSearchByTypeMutation } from '../store/slices/estatesApiSlice'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import EstateCard from '../components/EstateCard'
import { toast } from 'react-toastify'

const SearchScreen = () => {

    const [buildType, setBuildType] = useState("");
    const [city, setCity] = useState("");
    const [searchedEstate, setSearchedEstate] = useState([]);
    const [saleOrRent, setSaleOrRent] = useState("");
    const [isFirst, setIsFirst] = useState(true);
    console.log(saleOrRent)
    console.log(buildType)

    const { data: estates, isLoading, error } = useGetEstatesQuery();

    const [getSearchByType, {isLoading: searchLoading}] = useGetSearchByTypeMutation();
    console.log(useGetSearchByTypeMutation());

    const searchHandler = async (e) => {
        setIsFirst(false);
        e.preventDefault();
        try {
            const res = await getSearchByType({
                buildType,
                city,
                saleOrRent
            }).unwrap();
            console.log(res);
            setSearchedEstate(res);
            toast.success('Searched successfully');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
        
    }
    return (
        <>
            <Row>
                <form>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Search</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Global Search" />
                    </div>
                </form>
            </Row>
            <Row>
                <Col md={4}>
                    <h3 className='text-info text-2xl mb-2'> Pick The Place Type</h3>
                    <Form.Control
                        as='select'
                        onChange={(e) => setBuildType(e.target.value)}>
                        <option value=''>Place Types...</option>
                        <option value='Apartment'>🏚️ Apartment</option>
                        <option value='studio'>🏚️ studio</option>
                        <option value='villa'>🏚️ villa</option>
                        <option value='offices'>🏚️ offices</option>
                        <option value='Storage'>🏚️ Storage</option>
                        <option value='Halls'>🏚️ Halls</option>
                        <option value='Stores'>🏚️ Stores</option>
                    </Form.Control>
                </Col>
                <Col md={3}>
                    <h3 className='text-info text-2xl mb-2'> Pick City</h3>
                    <Form.Control
                        as='select'
                        onChange={(e) => setCity(e.target.value)}>
                        <option value=''>City Select...</option>
                        <option>Akko</option>
                        <option>Haifa</option>
                        <option>Nazareth</option>
                        <option>Tel Avivi</option>
                        <option>Jerusalem</option>
                        <option>Eilat</option>
                        <option>Netanya</option>
                        <option>Herzliya</option>
                        <option>Ashdod</option>
                        <option>Tiberias</option>
                        <option>Petah Tikva</option>
                        <option>Holon</option>
                        <option>Rishon LeZion</option>
                        <option>Rehovot</option>
                        <option>Bat Yam</option>
                    </Form.Control>
                </Col>
                <Col md={2}>
                    <h3 className='text-info text-2xl mb-2'> Sale Or Rent </h3>
                    <Form.Control
                        as='select'                        
                        onChange={(e) => setSaleOrRent(e.target.value)}>
                        <option value=''>Choose...</option>
                        <option>sale</option>
                        <option>rent</option>
                    </Form.Control>
                </Col>
                <Col md={3}>
                    <Button
                        variant='success'
                        size='lg'
                        onClick={searchHandler}
                        style={{
                            width: "100%",
                            marginTop: "12.5%",
                        }}
                        className='dark:text-gray-700'
                    >Search</Button>
                </Col>
            </Row >

            <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
            <h3 className='text-primary text-4xl mb-3 mt-6'> Search Results: {searchedEstate === undefined ? '0' : searchedEstate.length + ' results'} </h3>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <Row>
                        {
                        isFirst ? estates.map((estate) => (
                            <Col key={estate._id} sm={12} md={6} lg={4} xl={3} >
                                <EstateCard item={estate} />
                            </Col>
                        )) : searchedEstate.map((estate) => (
                            <Col key={estate._id} sm={12} md={6} lg={4} xl={3} >
                                <EstateCard item={estate} />
                            </Col>
                        ))}
                    </Row>
                )
            }



        </>
    )
}

export default SearchScreen