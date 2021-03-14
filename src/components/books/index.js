import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {API} from '../../config/axios';
import NumberFormat from 'react-number-format';

const Books = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      setLoading(true);
      const books = await API.get('/books');
      setBooks(books.data.data.books);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);
  const ok = 123;
  return (
    <View style={{flex: 1}}>
      <View style={{height: 150}}>
        <Text style={{fontSize: 30, margin: 20, textAlign: 'center'}}>
          With us, you can shop online & help to save your high street at same
          time
        </Text>
      </View>
      {loading ? (
        <Text style={{fontSize: 30, textAlign: 'center'}}>Loading</Text>
      ) : (
        books.map((Books) => (
          <View style={styles.card} key={Books.id}>
            <Image
              source={{uri: `${Books.thumbnail}`}}
              style={{width: 150, height: 200, borderRadius: 10}}
            />
            <View style={styles.info}>
              <Text
                style={{fontSize: 25, fontWeight: 'bold'}}
                numberOfLines={2}
                ellipsizeMode="tail">
                {Books.title}
              </Text>
              <Text style={{fontSize: 20, fontStyle: 'italic', color: 'grey'}}>
                {Books.author}
              </Text>
              <NumberFormat
                value={Books.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp '}
                renderText={(price) => (
                  <Text style={styles.price}>{price}</Text>
                )}
              />
              <View style={{flex: 1}} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 45,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 3,
    paddingVertical: 6,
    position: 'absolute',
    bottom: -5,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  card: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  info: {
    flex: 1,
    height: 200,
    marginLeft: 15,
    marginBottom: 20,
    marginTop: 10,
  },
  price: {
    fontSize: 22,
    position: 'absolute',
    marginTop: 100,
    color: 'green',
    fontWeight: 'bold',
  },
});
export default Books;
