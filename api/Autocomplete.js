import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, ListItem } from 'react-native-elements';
import axios from 'axios';

const AutoComplete = ({ apiKey, apiEndpoint }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiEndpoint, {
        headers: {
          '533785e320msh9172b5fdd4d6c4ap1ad5c8jsn3ea7693f22e6': apiKey,
        },
        params: {
          query: search,
        },
      });
      setResults(response.data.results);
    };

    if (search !== '') {
      fetchData();
    }
  }, [search]);

  return (
    <View>
      <Input
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
      {results.map((result) => (
        <ListItem key={result.id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{result.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default AutoComplete;
