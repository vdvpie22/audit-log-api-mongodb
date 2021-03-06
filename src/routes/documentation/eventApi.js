exports.addEventSchema = {
	description: 'Create a new event',
	tags: ['events'],
	summary: 'Creates new event with given values',
	body: {
		type: 'object',
		properties: {
			_id: {type: 'string'},
			actor: {
				type: 'object',
				properties: {
					id: {type: 'string'},     // UserID = 118
					name: {type: 'string'},   // Ivanov
					group: {type: 'string'},  // Users
				}
			},
			event: {
				type: 'object',
				properties: {
					id: {type: 'string'},     // Unique eventid for grouping
					name: {type: 'string'},   // Update Customer Address
					group: {type: 'string'},  // Update Customer Address
				}
			},
			entity: {
				type: 'object',
				properties: {
					id: {type: 'string'},     // Customer Address ID
					name: {type: 'string'},   // Customer Address ZIP
					group: {type: 'string'},  // Customer Address
				}
			},
			related: {
				type: 'object',
				properties: {
					id: {type: 'string'},    // Customer ID
					name: {type: 'string'},  // Customer
					group: {type: 'string'}, // Customer
				}
			},
			action: {type: 'string'},       // update
			oldValue: {type: 'string'},     // 141207  - some original value
			newValue: {type: 'string'},     // 141205 - some changed value
			ipAddress: {type: 'string'},    // Source IP address
			result: {type: 'string'},   	// Message with result
			created: {type: 'string'},      // Date of event
			__v: {type: 'number'}
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: {type: 'string'},
				actor: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // UserID = 118
						name: {type: 'string'},   // Ivanov
						group: {type: 'string'},  // Users
					}
				},
				event: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // Unique eventid for grouping
						name: {type: 'string'},   // Update Customer Address
						group: {type: 'string'},  // Update Customer Address
					}
				},
				entity: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // Customer Address ID
						name: {type: 'string'},   // Customer Address ZIP
						group: {type: 'string'},  // Customer Address
					}
				},
				related: {
					type: 'object',
					properties: {
						id: {type: 'string'},    // Customer ID
						name: {type: 'string'},  // Customer
						group: {type: 'string'}, // Customer
					}
				},
				action: {type: 'string'},       // update
				oldValue: {type: 'string'},     // 141207  - some original value
				newValue: {type: 'string'},     // 141205 - some changed value
				ipAddress: {type: 'string'},    // Source IP address
				result: {type: 'string'},   	// Message with result
				created: {type: 'string'},      // Date of event
				__v: {type: 'number'}
			}
		}
	}
}

exports.putEventSchema = {
	description: 'Update event',
	tags: ['events'],
	summary: 'Update event with given values',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'event id'
			}
		}
	},
	body: {
		type: 'object',
		properties: {
			_id: {type: 'string'},
			actor: {
				type: 'object',
				properties: {
					id: {type: 'string'},     // UserID = 118
					name: {type: 'string'},   // Ivanov
					group: {type: 'string'},  // Users
				}
			},
			event: {
				type: 'object',
				properties: {
					id: {type: 'string'},     // Unique eventid for grouping
					name: {type: 'string'},   // Update Customer Address
					group: {type: 'string'},  // Update Customer Address
				}
			},
			entity: {
				type: 'object',
				properties: {
					id: {type: 'string'},     // Customer Address ID
					name: {type: 'string'},   // Customer Address ZIP
					group: {type: 'string'},  // Customer Address
				}
			},
			related: {
				type: 'object',
				properties: {
					id: {type: 'string'},    // Customer ID
					name: {type: 'string'},  // Customer
					group: {type: 'string'}, // Customer
				}
			},
			action: {type: 'string'},       // update
			oldValue: {type: 'string'},     // 141207  - some original value
			newValue: {type: 'string'},     // 141205 - some changed value
			ipAddress: {type: 'string'},    // Source IP address
			result: {type: 'string'},   	// Message with result
			created: {type: 'string'},      // Date of event
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: {type: 'string'},
				actor: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // UserID = 118
						name: {type: 'string'},   // Ivanov
						group: {type: 'string'},  // Users
					}
				},
				event: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // Unique eventid for grouping
						name: {type: 'string'},   // Update Customer Address
						group: {type: 'string'},  // Update Customer Address
					}
				},
				entity: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // Customer Address ID
						name: {type: 'string'},   // Customer Address ZIP
						group: {type: 'string'},  // Customer Address
					}
				},
				related: {
					type: 'object',
					properties: {
						id: {type: 'string'},    // Customer ID
						name: {type: 'string'},  // Customer
						group: {type: 'string'}, // Customer
					}
				},
				action: {type: 'string'},       // update
				oldValue: {type: 'string'},     // 141207  - some original value
				newValue: {type: 'string'},     // 141205 - some changed value
				ipAddress: {type: 'string'},    // Source IP address
				result: {type: 'string'},   	// Message with result
				created: {type: 'string'},      // Date of event
				__v: {type: 'number'}
			}
		}
	}
}

exports.getEventSchema = {
	description: 'Get single event',
	tags: ['events'],
	summary: 'Get single event',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'event id'
			}
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: {type: 'string'},
				actor: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // UserID = 118
						name: {type: 'string'},   // Ivanov
						group: {type: 'string'},  // Users
					}
				},
				event: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // Unique eventid for grouping
						name: {type: 'string'},   // Update Customer Address
						group: {type: 'string'},  // Update Customer Address
					}
				},
				entity: {
					type: 'object',
					properties: {
						id: {type: 'string'},     // Customer Address ID
						name: {type: 'string'},   // Customer Address ZIP
						group: {type: 'string'},  // Customer Address
					}
				},
				related: {
					type: 'object',
					properties: {
						id: {type: 'string'},    // Customer ID
						name: {type: 'string'},  // Customer
						group: {type: 'string'}, // Customer
					}
				},
				action: {type: 'string'},       // update
				oldValue: {type: 'string'},     // 141207  - some original value
				newValue: {type: 'string'},     // 141205 - some changed value
				ipAddress: {type: 'string'},    // Source IP address
				result: {type: 'string'},   	// Message with result
				created: {type: 'string'},      // Date of event
				__v: {type: 'number'}
			}
		}
	}
}

exports.getEventsSchema = {
	description: 'Get all events',
	tags: ['events'],
	summary: 'Get all events',
	response: {
		200: {
			description: 'Successful response',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					_id: {type: 'string'},
					actor: {
						type: 'object',
						properties: {
							id: {type: 'string'},     // UserID = 118
							name: {type: 'string'},   // Ivanov
							group: {type: 'string'},  // Users
						}
					},
					event: {
						type: 'object',
						properties: {
							id: {type: 'string'},     // Unique eventid for grouping
							name: {type: 'string'},   // Update Customer Address
							group: {type: 'string'},  // Update Customer Address
						}
					},
					entity: {
						type: 'object',
						properties: {
							id: {type: 'string'},     // Customer Address ID
							name: {type: 'string'},   // Customer Address ZIP
							group: {type: 'string'},  // Customer Address
						}
					},
					related: {
						type: 'object',
						properties: {
							id: {type: 'string'},    // Customer ID
							name: {type: 'string'},  // Customer
							group: {type: 'string'}, // Customer
						}
					},
					action: {type: 'string'},       // update
					oldValue: {type: 'string'},     // 141207  - some original value
					newValue: {type: 'string'},     // 141205 - some changed value
					ipAddress: {type: 'string'},    // Source IP address
					result: {type: 'string'},   	// Message with result
					created: {type: 'string'},      // Date of event
					__v: {type: 'number'}
				}
			}
		}
	}
}

exports.delEventSchema = {
	description: 'Delete single event',
	tags: ['events'],
	summary: 'Delete single event',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'event id'
			}
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
		}
	}
}