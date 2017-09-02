/**
 * @author: @DatoIsko
 */

const webpack = require('webpack');
const helpers = require('./helpers');

/**
 * Webpack Plugins
 *
 * problem with copy-webpack-plugin
 */
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;