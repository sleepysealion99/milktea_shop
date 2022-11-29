import React, { useEffect, useState } from 'react';
import '../tea.css';
import { Form, Select, Switch, Button } from 'antd';

export default function Filter(props) {
    const { setFilterState, filterState, reset } = props;
    return (
        <div className="filter">
            <Form className={'formBox'} onFinishFailed={() => {}}>
                <Form.Item className={'formItem'} label={'Sort by Price'}>
                    <Switch
                        checked={filterState.sort}
                        onChange={(checked) => {
                            checked &&
                                setFilterState({
                                    ...filterState,
                                    sort: checked,
                                });
                        }}
                    />
                </Form.Item>
                <Form.Item className={'formItem'} label={'iced-only'}>
                    <Select
                        value={filterState.ice}
                        onChange={(value) =>
                            setFilterState({
                                ...filterState,
                                ice: value,
                            })
                        }
                        options={[
                            {
                                value: 2,
                                label: 'All',
                            },
                            {
                                value: 1,
                                label: 'Yes',
                            },
                            {
                                value: 0,
                                label: 'No',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item className={'formItem'} label={'gluten-free'}>
                    <Select
                        value={filterState.gluten}
                        onChange={(value) =>
                            setFilterState({
                                ...filterState,
                                gluten: value,
                            })
                        }
                        options={[
                            {
                                value: 2,
                                label: 'All',
                            },
                            {
                                value: 1,
                                label: 'Yes',
                            },
                            {
                                value: 0,
                                label: 'No',
                            },
                        ]}
                    />
                </Form.Item>
            </Form>
            <Button style={{
              background:'#343a98'
            }} type="primary" onClick={reset}>
                Reset
            </Button>
        </div>
    );
}
