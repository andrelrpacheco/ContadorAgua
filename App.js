import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default class ContadorAgua extends Component {

  constructor(props) {
    super(props)
    this.state = {
      consumido: 0,
      status: 'Ruim',
      pct: 0
    }
    this.addAgua = this.addAgua.bind(this)
    this.atualizar = this.atualizar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  atualizar() {
    let s = this.state
    s.pct = ((s.consumido / 2000) * 100).toFixed(0);
    if (s.pct >= 100 && s.pct <= 130) {
      s.status = 'Bom'
    } else if (s.pct > 130) {
      s.status = 'Ótimo'
    } else {
      s.status = 'Ruim'
    }
    this.setState(s)
  }

  addAgua() {
    let s = this.state
    s.consumido += 200
    this.setState(s)
    this.atualizar()
  }

  limpar() {
    let s = this.state
    s.consumido = 0
    s.status = 'Ruim'
    s.pct = 0

    this.setState(s)
    this.atualizar()
  }

  render() {
    return (
      <View style={styles.global}>
        <ImageBackground
          source={require('./assets/waterbg.png')}
          style={styles.img}>

          <View style={styles.infoArea}>
            <View style={styles.area}>
              <Text style={styles.tituloArea}>Meta Diária</Text>
              <Text style={styles.subtituloArea}>2000ml</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.tituloArea}>Consumido</Text>
              <Text style={styles.subtituloArea}>{this.state.consumido}ml</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.tituloArea}>Situação</Text>
              <Text style={styles.subtituloArea}>{this.state.status}</Text>
            </View>
          </View>

          <View style={styles.pctArea}>
            <Text style={styles.pctTexto}>{this.state.pct}%</Text>
          </View>

          <View style={styles.botaoArea}>
            <TouchableOpacity style={styles.botao} onPress={this.addAgua}>
              <Text style={styles.botaoText}>Registrar 200ml</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.limpar}>
              <Text style={styles.botaoText}>Limpar</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  global: {
    flex: 1,
    paddingTop: 30
  },
  img: {
    flex: 1,
    width: null
  },
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 70
  },
  area: {
    flex: 1,
    alignItems: 'center',
  },
  tituloArea: {
    color: '#45b2fc',
    fontSize: 20
  },
  subtituloArea: {
    fontSize: 15,
    color: '#2b4272',
    fontWeight: 'bold'
  },
  pctArea: {
    fontSize: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pctTexto: {
    fontSize: 70,
    color: '#fff',
    backgroundColor: 'transparent'
  },
  botaoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  botaoText: {
    fontSize: 18,
    fontFamily: 'Arial',
    color: '#2b4272'
  }
})